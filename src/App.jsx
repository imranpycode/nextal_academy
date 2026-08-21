import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import useFPSMonitor from './hooks/useFPSMonitor';
import LoadingScreen from './components/LoadingScreen';
import Lenis from '@studio-freight/lenis';

// ── Lazy load below-fold & route-only components ──────────────────────────
const WhyUs       = React.lazy(() => import('./components/WhyUs'));
const Syllabus    = React.lazy(() => import('./components/Syllabus'));
const Highlights  = React.lazy(() => import('./components/Highlights'));
const Faq         = React.lazy(() => import('./components/Faq'));
const CtaBanner   = React.lazy(() => import('./components/CtaBanner'));
const Footer      = React.lazy(() => import('./components/Footer'));
const EnrollModal = React.lazy(() => import('./components/EnrollModal'));
const ServiceDetail = React.lazy(() => import('./components/ServiceDetail'));
const CourseDetail  = React.lazy(() => import('./components/CourseDetail'));
const Blogs         = React.lazy(() => import('./components/Blogs'));
const Placement     = React.lazy(() => import('./components/Placement'));
const ComingSoon    = React.lazy(() => import('./components/ComingSoon'));

// Minimal inline fallback — no extra render cost
// Premium Fallback
const PageFallback = () => <LoadingScreen isFadingOut={false} />;

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  
  // Start FPS Monitor
  useFPSMonitor();

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Add scroll velocity hook for dynamic animation durations
    lenis.on('scroll', (e) => {
      const velocity = Math.abs(e.velocity || 0);
      let duration = 1.2 - (velocity * 0.2); 
      duration = Math.max(0.3, Math.min(duration, 1.2)); // Clamp between 0.3s and 1.2s
      document.documentElement.style.setProperty('--reveal-duration', `${duration.toFixed(2)}s`);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    let timeoutMs = 800; // Standard connection
    if (navigator.connection) {
      const { effectiveType, downlink } = navigator.connection;
      if (effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g' || downlink < 1.5) {
        timeoutMs = 2500;
        document.documentElement.setAttribute('data-low-performance', 'true'); // Pre-emptive low-perf mode for slow nets
      }
    }

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setInitialLoading(false), 600); // 600ms fade transition
    }, timeoutMs);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll reveal — runs after paint and watches for lazy-loaded DOM elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('premium-revealed');
        } else {
          entry.target.classList.remove('premium-revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: "-5% 0px -5% 0px" });

    const observeNewElements = () => {
      const sections = document.querySelectorAll(
        'section:not(.reveal-observed), .hero-section:not(.reveal-observed), .site-footer:not(.reveal-observed), .observe-root:not(.reveal-observed)'
      );
      sections.forEach(sec => {
        sec.classList.add('reveal-observed');
        observer.observe(sec);
      });
    };

    // Initial check
    observeNewElements();

    // Watch for lazy-loaded components entering the DOM
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Global anchor interceptor
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;

      if (href.startsWith('/services/') || href.startsWith('/course/') || href === '/blogs' || href === '/placement' || href === '/terms' || href === '/privacy') {
        e.preventDefault();
        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
        window.scrollTo({ top: 0, behavior: 'instant' }); // instant so new page doesn't scroll-animate in from bottom
        return;
      }

      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        
        const scrollToTarget = () => {
          let attempts = 0;
          const checkExist = setInterval(() => {
            const el = document.querySelector(href);
            if (el) {
              clearInterval(checkExist);
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            attempts++;
            if (attempts > 30) clearInterval(checkExist); // Give up after 3 seconds
          }, 100);
        };

        if (window.location.pathname !== '/') {
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new Event('popstate'));
        }
        
        scrollToTarget();
        return;
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleSelectService = (slug) => {
    window.history.pushState({}, '', `/services/${slug}`);
    window.dispatchEvent(new Event('popstate'));
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  const normalizedPath = currentPath.replace(/\/+$/, '') || '/';
  
  const isServiceRoute  = normalizedPath.startsWith('/services/');
  const serviceSlug     = isServiceRoute ? normalizedPath.replace('/services/', '') : '';
  const isCourseRoute   = normalizedPath.startsWith('/course/');
  const courseSlug      = isCourseRoute ? normalizedPath.replace('/course/', '') : '';
  const isBlogsRoute    = normalizedPath === '/blogs';
  const isPlacementRoute = normalizedPath === '/placement';
  const isTermsRoute     = normalizedPath === '/terms';
  const isPrivacyRoute   = normalizedPath === '/privacy';

  return (
    <div className="app">
      <Header onOpenEnrollModal={() => setModalOpen(true)} />

      <Suspense fallback={<PageFallback />}>
        {isServiceRoute ? (
          <ServiceDetail slug={serviceSlug} onBack={handleBackToHome} onOpenEnrollModal={() => setModalOpen(true)} />
        ) : isCourseRoute ? (
          <CourseDetail slug={courseSlug} onBack={handleBackToHome} onOpenEnrollModal={() => setModalOpen(true)} />
        ) : isBlogsRoute ? (
          <Blogs onBack={handleBackToHome} />
        ) : isPlacementRoute ? (
          <Placement onBack={handleBackToHome} />
        ) : isTermsRoute ? (
          <ComingSoon title="Terms & Conditions" onBack={handleBackToHome} />
        ) : isPrivacyRoute ? (
          <ComingSoon title="Privacy Policy" onBack={handleBackToHome} />
        ) : (
          <main>
            <Hero onOpenEnrollModal={() => setModalOpen(true)} />
            <WhyUs onSelectService={handleSelectService} />
            <Syllabus />
            <Highlights />
            <Faq />
            <CtaBanner onOpenEnrollModal={() => setModalOpen(true)} />
          </main>
        )}

        <Footer />
        <EnrollModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </Suspense>

      {initialLoading && <LoadingScreen isFadingOut={isFadingOut} />}
    </div>
  );
}

import React, { useState, useRef, useEffect, Suspense } from "react";

// Fallback ini hanya akan muncul pada koneksi yang sangat lambat
const InvisibleSuspenseFallback = () => (
  <div className="min-h-screen" aria-hidden="true" />
);

// Placeholder yang ditampilkan sebelum komponen mulai dimuat.
// Fungsinya hanya untuk menjaga ruang dan mencegah layout shift.
const SectionPlaceholder = () => (
  <div className="min-h-screen" aria-hidden="true" />
);

const LazySection = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // Mulai memuat saat section berada 100% tinggi viewport dari layar.
        // Pengguna tidak akan pernah melihat loading pada scroll normal.
        rootMargin: "100% 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <Suspense fallback={<InvisibleSuspenseFallback />}>{children}</Suspense>
      ) : (
        <SectionPlaceholder />
      )}
    </div>
  );
};

export default LazySection;

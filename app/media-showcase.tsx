"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { facultythonImages, galleryImages, workshopSlides, type WorkshopMedia } from "./workshop-media";

function TrainingSlideshow({ onView, viewerOpen }: { onView: (image: WorkshopMedia) => void; viewerOpen: boolean }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const slide = workshopSlides[activeSlide];
  const autoplay = !paused && !hovered && !focused && !reducedMotion && !viewerOpen;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveSlide((current) => (current + 1) % workshopSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [autoplay]);

  const move = (step: number) => setActiveSlide((current) => (current + step + workshopSlides.length) % workshopSlides.length);

  return (
    <section className="training-slideshow" aria-labelledby="slideshow-title">
      <div className="media-heading">
        <div><p className="eyebrow">Training in motion</p><h3 id="slideshow-title">A view from the classroom.</h3></div>
        <p>Workshops, seminars and innovation events—explore the moments behind the learning.</p>
      </div>
      <div
        className="slideshow-stage"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => !event.currentTarget.contains(event.relatedTarget) && setFocused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Workshop and event highlights"
      >
        <div aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
          <figure className="workshop-slide" key={slide.src}>
            <button className="slide-image" type="button" onClick={() => onView(slide)} aria-label={"View full image: " + slide.title} aria-haspopup="dialog">
              <Image unoptimized src={slide.src} fill sizes="(max-width: 720px) 88vw, 55vw" alt={slide.alt} />
              <span className="image-view-hint">View full image ↗</span>
            </button>
            <figcaption className="slide-caption">
              <span className="media-kicker">{slide.kind} {slide.date && <>· {slide.date}</>}</span>
              <h4>{slide.title}</h4>
              <p className="media-institution">{slide.institution}</p>
              <p>{slide.description}</p>
              <span className="slide-count">{String(activeSlide + 1).padStart(2, "0")} <span>/ {String(workshopSlides.length).padStart(2, "0")}</span></span>
            </figcaption>
          </figure>
        </div>
        <div className="slideshow-toolbar">
          <div className="slide-dots" role="group" aria-label="Choose an image">
            {workshopSlides.map((image, index) => <button type="button" key={image.src} className={index === activeSlide ? "active" : ""} onClick={() => setActiveSlide(index)} aria-label={"Show image " + (index + 1) + ": " + image.title} aria-current={index === activeSlide ? "true" : undefined}><span /></button>)}
          </div>
          <div className="slideshow-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Show previous image">←</button>
            <button type="button" className="pause-control" onClick={() => setPaused((current) => !current)} aria-label={paused ? "Resume slideshow" : "Pause slideshow"} aria-pressed={paused} disabled={reducedMotion}>{reducedMotion ? "Manual" : paused ? "Resume" : "Pause"}</button>
            <button type="button" onClick={() => move(1)} aria-label="Show next image">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCards({ images, onView }: { images: WorkshopMedia[]; onView: (image: WorkshopMedia) => void }) {
  return <div className="gallery-grid">
        {images.map((item) => (
          <button type="button" className="gallery-card" key={item.src} onClick={() => onView(item)} aria-label={"View " + item.title + (item.date ? ", " + item.date : "")} aria-haspopup="dialog">
            <span className="gallery-visual">
              <Image unoptimized src={item.src} fill sizes="(max-width: 560px) 88vw, (max-width: 1000px) 43vw, 28vw" alt={item.alt} loading="lazy" />
              <span className="gallery-overlay"><small>{item.kind}</small><span>{item.description}</span><b>View full image ↗</b></span>
            </span>
            <span className="gallery-caption"><small>{item.date || item.kind}</small><strong>{item.title}</strong><span>{item.institution}</span></span>
          </button>
        ))}
      </div>;
}

function PhotoGallery({ onView }: { onView: (image: WorkshopMedia) => void }) {
  const otherImages = galleryImages.filter((image) => !facultythonImages.includes(image));

  return (
    <section className="photo-gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="media-heading gallery-heading">
        <div><p className="eyebrow">Photo gallery</p><h3 id="gallery-title">Moments that tell the story.</h3></div>
        <p>Explore event posters, workshop highlights and press coverage. Hover for a short description, or select an image for a closer look.</p>
      </div>
      <section className="gallery-collection" aria-labelledby="facultython-gallery-title">
        <header className="gallery-collection-heading">
          <p className="eyebrow">Latest engagement · 31 October 2026</p>
          <h4 id="facultython-gallery-title">FACULTYTHON 2026 — Jury Member</h4>
          <p>Meston College of Arts & Science, in collaboration with Top Engineers–India. A seven-hour hackathon, captured through the jury announcement, event highlights and press coverage.</p>
        </header>
        <GalleryCards images={facultythonImages} onView={onView} />
      </section>
      <section className="gallery-collection" aria-labelledby="more-events-title">
        <header className="gallery-collection-heading"><h4 id="more-events-title">More workshops & events</h4></header>
        <GalleryCards images={otherImages} onView={onView} />
      </section>
    </section>
  );
}

function ImageViewer({ image, onClose }: { image: WorkshopMedia; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  return <dialog ref={dialogRef} className="media-viewer" aria-labelledby="media-viewer-title" aria-describedby="media-viewer-description" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="media-viewer-content">
      <header><span className="media-kicker">{image.kind}{image.date && <> · {image.date}</>}</span><button type="button" onClick={onClose} autoFocus aria-label="Close image viewer">Close <span aria-hidden="true">×</span></button></header>
      <div className="media-viewer-image"><Image unoptimized src={image.src} fill sizes="92vw" alt={image.alt} /></div>
      <div className="media-viewer-caption"><h3 id="media-viewer-title">{image.title}</h3><p className="media-institution">{image.institution}</p><p id="media-viewer-description">{image.description}</p><a href={image.src} target="_blank" rel="noreferrer">Open original image ↗</a></div>
    </div>
  </dialog>;
}

export function MediaShowcase() {
  const [selectedImage, setSelectedImage] = useState<WorkshopMedia | null>(null);
  return <div className="media-showcase"><TrainingSlideshow onView={setSelectedImage} viewerOpen={selectedImage !== null} /><PhotoGallery onView={setSelectedImage} />{selectedImage && <ImageViewer image={selectedImage} onClose={() => setSelectedImage(null)} />}</div>;
}

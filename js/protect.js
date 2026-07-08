/* Image download protection (best-effort).
   Blocks right-click and drag on images and photo frames site-wide.
   Note: no client-side method can make images 100% un-downloadable. */
document.addEventListener("contextmenu", function (e) {
  if (e.target.closest("img, .photo-frame")) e.preventDefault();
});
document.addEventListener("dragstart", function (e) {
  if (e.target.closest("img, .photo-frame")) e.preventDefault();
});

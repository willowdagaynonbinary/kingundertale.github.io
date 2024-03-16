const isMobile = window.matchMedia("(max-width: 768px)").matches;
const previouslyAcknowledgedMobileAlert =
  localStorage.getItem("previouslyAcknowledgedMobileAlert") || false;

if (isMobile && !previouslyAcknowledgedMobileAlert) {
  alert(
    "You're on mobile - just to let you know this website isnt as good on mobile"
  );

  localStorage.setItem("previouslyAcknowledgedMobileAlert", true);
}

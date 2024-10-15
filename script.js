// Update the progress bar as the user scrolls through the timeline
function updateProgress() {
  const content = document.querySelector('.timeline-content');
  const progressBar = document.getElementById('progress');
  const totalScroll = content.scrollHeight - content.clientHeight;
  const scrollPosition = content.scrollTop;

  const scrollPercentage = (scrollPosition / totalScroll) * 100;
  progressBar.style.width = scrollPercentage + "%";
}
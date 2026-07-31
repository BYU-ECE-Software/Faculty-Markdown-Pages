(function () {
  function init() {
    const anchor = window.location.hash.slice(1);
    if (anchor === '') return;
    const element = document.getElementById(anchor);
    if (!element) return;
    const tabbedSet = element.closest('.tabbed-set');
    if (!tabbedSet) return;
    const checkboxes = tabbedSet.getElementsByTagName('input');
    if (checkboxes.length === 0) return;
    const tabbedBlock = element.closest('.tabbed-block');
    const index = Array.from(tabbedBlock.parentNode.children).indexOf(tabbedBlock);
    checkboxes[index].click();
    window.location = window.location; // forces the scroll after activation
  }
  window.addEventListener('DOMContentLoaded', init, false);
  window.addEventListener('hashchange', init, false);
})();
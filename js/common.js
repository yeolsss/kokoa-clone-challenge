const SELECT_ICON = 'fa-regular';
const REMOVE_ICON = 'fa-solid';

function includeHtml() {
  const includeTarget = document.querySelectorAll('.include__html');
  includeTarget.forEach(function (el, idx) {
    const targetFile = el.dataset.includeFile;
    if (targetFile) {
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
          this.status === 200 ? (el.innerHTML = this.responseText) : null;
          this.status === 404 ? (el.innerHTML = 'include not found.') : null;
        }
      };
      xhttp.open('GET', targetFile, true);
      xhttp.send();
      return;
    }
  });
}

includeHtml();

function checkURL() {
  const nowUrl = document.URL.split('/');
  const lastUrl = nowUrl.pop() || nowUrl.pop();
  const icons = document.querySelectorAll('.nav__link i:first-child');

  if (lastUrl === 'friends.html') {
    changeIcons(icons, '0');
  } else if (lastUrl === 'chats.html') {
    changeIcons(icons, '1');
  } else {
    changeIcons(icons, '2');
  }
}

function changeIcons(icons, indexNum) {
  icons.forEach((item, idx) => {
    if (parseInt(indexNum) !== 2 && idx < 2) {
      if (parseInt(indexNum) === idx) {
        item.classList.replace(SELECT_ICON, REMOVE_ICON);
      } else {
        item.classList.replace(REMOVE_ICON, SELECT_ICON);
      }
    } else if (idx < 2) {
      item.classList.replace(REMOVE_ICON, SELECT_ICON);
    }
  });
}

window.onload = () => {
  checkURL();
};

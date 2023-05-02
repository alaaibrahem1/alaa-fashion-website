const viewWorkBtn = document.querySelector('.main-btn');

viewWorkBtn.addEventListener('click', () => {
  const projectsSection = document.querySelector('#project');
  projectsSection.scrollIntoView({behavior: "smooth"});
});



const mainSection = document.createElement('section');
mainSection.classList.add('main');

const mainDiv = document.createElement('div');
mainSection.appendChild(mainDiv);

const mainHeading = document.createElement('h2');
mainHeading.innerText = "Hello, I'm 3laa";
mainDiv.appendChild(mainHeading);

const span = document.createElement('span');
span.innerText = 'freelance model';
mainHeading.appendChild(document.createElement('br'));
mainHeading.appendChild(span);

const subHeading = document.createElement('h3');
subHeading.innerText = "I build unique lifestyle for fashion..";
mainDiv.appendChild(subHeading);

const viewWorkButton = document.createElement('a');
viewWorkButton.href = '#projects';
viewWorkButton.classList.add('main-btn');
viewWorkButton.innerText = 'View my work';
mainDiv.appendChild(viewWorkButton);

const socialIconsDiv = document.createElement('div');
socialIconsDiv.classList.add('social-icons');
mainDiv.appendChild(socialIconsDiv);

['facebook', 'twitter', 'instagram', 'youtube'].forEach((icon) => {
  const iconLink = document.createElement('a');
  iconLink.href = '#';
  socialIconsDiv.appendChild(iconLink);

  const iconElement = document.createElement('i');
  iconElement.classList.add('fab');
  iconElement.classList.add(`fa-${icon}`);
  iconLink.appendChild(iconElement);
});

const cardSection = document.createElement('section');
cardSection.classList.add('cards');
cardSection.id = 'New collection';

const cardTitle = document.createElement('h2');
cardTitle.classList.add('title');
cardTitle.innerText = 'New Collection';
cardSection.appendChild(cardTitle);

const cardContentDiv = document.createElement('div');
cardContentDiv.classList.add('content');
cardSection.appendChild(cardContentDiv);

const cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardContentDiv.appendChild(cardDiv);

const iconDiv = document.createElement('div');
iconDiv.classList.add('icon');
cardDiv.appendChild(iconDiv);

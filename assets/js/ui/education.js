export const renderEducation = (education) => {
  const educationList = document.querySelector("[data-education-list]");
  if (!educationList) return;

  educationList.innerHTML = education.map((item) => `
    <article class="education-item">
      <span class="education-date">${item.date}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.institution}</p>
        ${item.certificateUrl ? `<a class="text-link" href="${item.certificateUrl}" target="_blank" rel="noreferrer">Veure certificat <span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>
  `).join("");
};

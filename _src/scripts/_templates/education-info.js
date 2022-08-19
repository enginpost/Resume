export function educationInfo_template(education_info) { return `

    <div class="certificates">
    ${education_info.map(certificate => {
        return `

        <div class="certificate">
            <div class="certificate-image ${certificate.icon.class}"><img src="${certificate.icon.val}" alt="${certificate.icon.alt}"></div>
            <div class="title">${certificate.title}</div>
            <div class="group">${certificate.group}</div>
            <div class="location">${certificate.location}</div>
            <div class="date">${certificate.date}</div>
        </div>

        `}).join('')}
    </div>

`;}
export function educationInfo_template(education_info) { return `

    <div class="certificates">
    ${education_info.map(certificate => {
        return `

        <div class="certificate">
            <div class="certificate-image ${certificate.icon.class}" 
                style="--bg-image: url(${certificate.icon.val})">
            </div>
            <div class="certificate-content">
                <div class="title">${certificate.title}</div>
                <div class="group">${certificate.group}</div>
                <div class="location">${certificate.location}</div>
                <div class="date">${certificate.date}</div>
            </div>
        </div>

        `}).join('')}
    </div>

`;}
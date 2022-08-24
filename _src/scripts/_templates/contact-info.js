export function contactInfo_template( contact_info ){ return `

<div class="icon"><img src="${contact_info.icon.val}" alt=""></div>
<div class="contact-details">
    <div class="name">${contact_info.first_name} ${contact_info.last_name}</div>
    <div class="address">
        ${contact_info.address.street} 
        ${contact_info.address.city}, 
        ${contact_info.address.state} 
        ${contact_info.address.zip} 
    </div>
    <div class="email">${contact_info.email}</div>
    <div class="phone">${contact_info.phone}</div>
    <div class="social">
        ${contact_info.social.map(social_media => {
            return `
            <div>    
                <a href="${social_media.profile}"><object
                        data="${social_media.icon.val}" 
                        class="img"></object></a>
            </div>
        `}).join('')}
    </div>
</div>
`;}
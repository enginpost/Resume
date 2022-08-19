import { getMonth, getYear } from "../utilities/dates.js";

export function experiencesInfo_template( experiences_info ){ return `

    ${experiences_info.map(experience => {
        return `

        <div class="experience">
            <div class="${experience.icon.class}"><img src="${experience.icon.val}" alt="${experience.icon.alt}"></div>
            <div class="role">${experience.role}</div>
            <div class="company">${experience.company}</div>
            <div class="location">${experience.location.city}, ${experience.location.state}</div>
            <div class="date">
                <div class="from">
                    <div class="month">${getMonth(experience.date.from)}</div>
                    <div class="year">${getYear(experience.date.from)}</div>
                </div>
                <div class="to">
                    <div class="month">${getMonth(experience.date.to)}</div>
                    <div class="year">${(getYear(experience.date.to)) ? getYear(experience.date.to) : "Current"}</div>
                </div>
            </div>
            <div class="accomplishments">
                <ul>
                    ${experience.accomplishments.map(accomplishment => { return `
        
                    <li>${accomplishment}</li>
        
                    `}).join('')}
                </ul>
            </div>
        </div>

        `}).join('')}

`;}
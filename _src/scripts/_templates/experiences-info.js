import { getMonth, getYear } from "../utilities/dates.js";

export function experiencesInfo_template( experiences_info ){ return `

    ${experiences_info.map(experience => {
        return `

        <div class="experience">
            <div class="experience-head">
                <img class="experience-icon ${experience.icon.class}"
                    src="${experience.icon.val}" alt="${experience.icon.alt}">
                <div class="date">
                    <div class="from">
                        <div class="title">from</div>
                        <div class="month">${getMonth(experience.date.from)}</div>
                        <div class="year">${getYear(experience.date.from)}</div>
                    </div>
                    <div class="to">
                        <div class="title">to</div>
                        <div class="month">${getMonth(experience.date.to) ? getMonth(experience.date.to) : "&hellip;" }</div>
                        <div class="year">${getYear(experience.date.to) ? getYear(experience.date.to) : "now"}</div>
                    </div>
                </div>
            </div>
            <div class="experience-factors">
                <div class="factors-text">
                    <div class="role">${experience.role}</div>
                    <div class="company">${experience.company}</div>
                    <div class="location">${experience.location.city}, ${experience.location.state}</div>
                </div>
                <div class="split-percentage">
                    <div class="split-management" 
                        style="--split-percent:${ experience.split.managerial * .1}" 
                        title="Management was ${experience.split.managerial}% of the position">
                            ${experience.split.managerial}%
                    </div>
                    <div class="split-technical"
                        style="--split-percent:${ experience.split.technical * .1}" 
                        title="Technical was ${experience.split.technical}% of the position">
                            ${experience.split.technical}%
                    </div>
                    <div class="split-creative"
                        style="--split-percent:${ experience.split.creative * .1}" 
                        title="Creative was ${experience.split.creative}% of the position">
                            ${experience.split.creative}%
                    </div>
                </div>
            </div>
            <div class="details">
                <div class="accomplishments">
                    <ul>
                        ${experience.accomplishments.map(accomplishment => { return `
    
                        <li>${accomplishment}</li>
            
                        `}).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `}).join('')}

`;}
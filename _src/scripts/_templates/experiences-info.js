import { getMonth, getYear } from "../utilities/dates.js";
import { factorsPieCreator } from "../utilities/factors.js";

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
                    <div class="split-management" style="--split-percent:.1" title="Management was 10% of the position">10%</div>
                    <div class="split-technical" style="--split-percent:.6" title="Technical was 60% of the position">60%</div>
                    <div class="split-creative" style="--split-percent:.3" title="Creative was 30% of the position">10%</div>
                </div>
            </div>
            <div class="details">
                <div class="accomplishments">
                    <ul>
                        ${experience.accomplishments.map(accomplishment => { return `y
                        
            
                        <li>${accomplishment}</li>
            
                        `}).join('')}
                    </ul>
                </div>
            </div>
        </div>
        `}).join('')}

`;}
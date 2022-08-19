export function skillsInfo_template( skills_info ){ return `

    ${skills_info.map(skill => { return `

        <div class="skill">
            <div class="title">${skill.title}</div>
            <div class="title">${skill.percentage}</div>
        </div>

    `}).join('')}

`;}
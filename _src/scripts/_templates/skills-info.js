export function skillsInfo_template( skills_info ){ return `

    ${skills_info.map(skill => { return `

        <div class="skill">
            <div class="title">${skill.title}</div>
            <div class="skill-measure" 
            style="background: linear-gradient(90deg, #739AC6 0%, #739AC6 ${skill.percentage}%, #C1C1C1 ${skill.percentage}% )"></div>
        </div>

    `}).join('')}

`;}
export function articleInfo_template( articles ){ return `
    <button class="articles-button article-button_previous">&lt;</button>
        <div class="articles-container">
            <a id="article-link" 
                title="${articles[0].title}" 
                href="${articles[0].url}"><img 
                    id="article-image" 
                    src="${articles[0].icon.val}" alt="$Read about {article.icon.alt}"></a>
        </div>
    <button class="articles-button article-button_next">&gt;</button>
`;}
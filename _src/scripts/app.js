//HTML templates to use in App.render
import { contactInfo_template } from "./_templates/contact-info.js";
import { educationInfo_template } from "./_templates/education-info.js";
import { skillsInfo_template } from "./_templates/skills-info.js";
import { experiencesInfo_template } from "./_templates/experiences-info.js";
import { articleInfo_template} from "./_templates/article-info.js"

let map = new WeakMap();

/**
 * App handles all of the code for the client-side resume application
 */
class App{

    /**
     * Starts the Resume App
     *
     * @param   {string}  source  [source = the path to the JSON resume]
     *
     * @return  {object}          [returns App instance]
     */
    constructor(){
        
        map.set(this,{
            listeners:{}
        });
    }

    addListener(type, fn) {
        let listeners = map.get(this).listeners;
        if( !listeners[type] ){
            listeners[type] = [];
        }
        listeners[type].push(fn);
    }
    removeListener(type, fn) {
        let listeners = map.get(this).listeners[type];
        if( !listeners ){
            return;
        }
        let index = listeners.indexOf(fn);
        while( index > -1){
            listeners.splice(index, 1);
            index = listeners.indexOf(fn);
        }
    }
    fireEvent(type, eventObj) {
        if( !type ){
            throw new Error("No event type specified");
        }
        if( !eventObj){
            eventObj = {};
        }
        if( !eventObj.type ){
            eventObj.type = type;
        }
        if( !eventObj.target ){
            eventObj.target = this;
        }
        let listeners = map.get(this).listeners[type];
        if (!listeners) {
            return;
        }
        listeners.forEach(listener => {
            listener(eventObj);
        });
    }

    /**
     * [adds parsed JSON elements of the resume to html templates for rendering]
     *
     * @param   {string}  where  [the class name where the html template should be rendered]
     * @param   {string}  what   [the html literal string template with JSON embedded]
     *
     */
    render(where, what) {
        document.getElementsByClassName(where)[0].innerHTML = what;
    }
    /**
     * [fetchData loads JSON resume data from an external site-local file]
     *
     * @param   {[type]}  this_source  [this_source description]
     * @param   {[type]}  this_error   [this_error description]
     *
     */
    fetchData( this_source ){
        fetch(this_source)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error" + response.status);
                }
                return response.json();
            })
            .then(json => {
                this.data = json;
                
                this.render("contact-info", contactInfo_template(this.data.resume.contact_info));
                this.render("education", educationInfo_template(this.data.resume.education));
                this.render("skills", skillsInfo_template(this.data.resume.skills));
                this.render("experiences", experiencesInfo_template(this.data.resume.experiences));
                this.render("articles", articleInfo_template(this.data.resume.articles));
                this.fireEvent("onResumeLoaded");
            })
            .catch((err) => {
                this.fireEvent("onResumeLoadError", err);
            });
    }
    
    /**
     * Makes loaded Resume data in JSON format available to javascript after the page load
     *
     * @return  {object}  [returns a JSON object of resume data]
     */
    getResume(){
        return this.data;
    }

}

//local variables
var articleNumber = -1;
var articleCount = 0;
var articleTimeoutLength = 5000;
var changeArticleTimer;
var articles = [];

//Article Carousel: start
function showPreviousArticle() {
    clearTimeout(changeArticleTimer);
    articleNumber = articleNumber - 2;
    if (articleNumber < -1) {
        articleNumber = articles.length - 2;
    }
    changeArticle();
}
function showNextArticle() {
    clearTimeout(changeArticleTimer);
    changeArticle(articles);
}
function changeArticle() {
    clearTimeout(changeArticleTimer);
    articleNumber++;
    if (articleNumber + 1 > articles.length) {
        articleNumber = 0;
    }
    document.getElementById("article-image").src = articles[articleNumber].icon.val;
    document.getElementById("article-image").alt = articles[articleNumber].icon.alt;
    document.getElementById("article-link").href = articles[articleNumber].url;
    document.getElementById("article-link").title = "Click to read " + articles[articleNumber].title;
    setChangeArticleTimer();
}
function setChangeArticleTimer() {
    changeArticleTimer = setTimeout(changeArticle, articleTimeoutLength);
}
// Articles Carousel: end

//RUN app
let myResume = new App();

myResume.addListener("onResumeLoaded", (evt) => {
    let data = myResume.getResume();
    articles = data.resume.articles;

    let previousArticle = document.querySelector(".article-button_previous");
    previousArticle.addEventListener("click", (evt) => {
        showPreviousArticle();
    });

    let nextArticle = document.querySelector(".article-button_next");
    nextArticle.addEventListener("click", (evt) => {
        showNextArticle();
    });
    changeArticle();

});
myResume.addListener("onResumeLoadError", (evt) => {
    console.log("data loading error");
});
myResume.fetchData("/scripts/data/resume.json");
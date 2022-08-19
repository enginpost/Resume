//HTML templates to use in App.render
import { contactInfo_template } from "./_templates/contact-info.js";
import { educationInfo_template } from "./_templates/education-info.js";
import { skillsInfo_template } from "./_templates/skills-info.js";
import { experiencesInfo_template } from "./_templates/experiences-info.js";

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
    constructor(source){
        var DATA_SOURCE = source;
        var DATA_ERROR = false;
        this.fetchData( DATA_SOURCE, DATA_ERROR );
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
    fetchData( this_source, this_error){
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

            })
            .catch((err) => {
                this_error = true;
                console.log(err);
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

let myResume = new App("/scripts/data/resume.json");
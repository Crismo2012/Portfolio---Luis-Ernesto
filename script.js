

const intro = document.querySelector('.intro');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

const view = document.querySelector('.view');

const tabHome = document.querySelector('.tab__home');
const tabAbout = document.querySelector('.tab__about');
const tabSkills = document.querySelector('.tab__skills');
const tabProject = document.querySelector('.tab__projects');
const tabContact = document.querySelector('.tab__contact');

// HOME
tabHome.addEventListener('click', function(){
    tabHome.classList.add('tab-selected');
    if(tabAbout.classList.contains('tab-selected')) {
    tabAbout.classList.remove('tab-selected');
    tabAbout.classList.add('tab');
    } else if(tabSkills.classList.contains('tab-selected')) {
        tabSkills.classList.remove('tab-selected');
        tabSkills.classList.add('tab');
    } else if(tabProject.classList.contains('tab-selected')){
        tabProject.classList.remove('tab-selected');
        tabProject.classList.add('tab');
    } else if(tabContact.classList.contains('tab-selected')){
        tabContact.classList.remove('tab-selected');
        tabContact.classList.add('tab');
    };

    intro.classList.remove('intro-inactive');
    intro.classList.add('intro');

    if (about.classList.contains('active')){
        about.classList.remove('active');
    } else if(skills.classList.contains('active')){
        skills.classList.remove('active');
    } else if(projects.classList.contains('active')){
        projects.classList.remove('active');
    } else if(contact.classList.contains('active')){
        contact.classList.remove('active');
    }
});

// ABOUT
tabAbout.addEventListener('click', function(){
    tabAbout.classList.add('tab-selected');
    if (view.classList.contains('view-intro')) {
        view.classList.remove('view-intro');
        view.classList.add('view-about');
    }
    if(tabHome.classList.contains('tab-selected')) {
        tabHome.classList.remove('tab-selected');
        tabHome.classList.add('tab')
    } else if(tabSkills.classList.contains('tab-selected')) {
        tabSkills.classList.remove('tab-selected')
        tabSkills.classList.add('tab')
    } else if(tabProject.classList.contains('tab-selected')){
        tabProject.classList.remove('tab-selected');
        tabProject.classList.add('tab')
    } else if(tabContact.classList.contains('tab-selected')){
        tabContact.classList.remove('tab-selected');
        tabContact.classList.add('tab')
    };
    
    about.classList.add('active')

    if (intro.classList.contains('intro')){
        intro.classList.remove('intro');
        intro.classList.add('intro-inactive')
    } else if(skills.classList.contains('active')){
        skills.classList.remove('active');
    } else if(projects.classList.contains('active')){
        projects.classList.remove('active');
    } else if(contact.classList.contains('active')){
        contact.classList.remove('active');
    }
});

// SKILLS
tabSkills.addEventListener('click', function(){
    tabSkills.classList.add('tab-selected');
    if((tabHome.classList.contains('tab-selected'))) {
        intro.classList.add('intro-out');
        tabHome.classList.remove('tab-selected');
        tabHome.classList.add('tab')
    } else if(tabAbout.classList.contains('tab-selected')) {
        tabAbout.classList.remove('tab-selected')
        tabAbout.classList.add('tab')
    } else if(tabProject.classList.contains('tab-selected')){
        tabProject.classList.remove('tab-selected');
        tabProject.classList.add('tab')
    } else if(tabContact.classList.contains('tab-selected')){
        tabContact.classList.remove('tab-selected');
        tabContact.classList.add('tab')
    }
    
    skills.classList.add('active');
    
    if (intro.classList.contains('intro')){
        intro.classList.remove('intro');
        intro.classList.add('intro-inactive')
    } else if(about.classList.contains('active')){
        about.classList.remove('active');
    } else if(projects.classList.contains('active')){
        projects.classList.remove('active');
    } else if(contact.classList.contains('active')){
        contact.classList.remove('active');
    }
});

// PROJECTS
tabProject.addEventListener('click', function(){
    tabProject.classList.add('tab-selected')
    if((tabHome.classList.contains('tab-selected'))) {
        intro.classList.add('intro-out');
        tabHome.classList.remove('tab-selected');
        tabHome.classList.add('tab')
    } else if(tabSkills.classList.contains('tab-selected')) {
        tabSkills.classList.remove('tab-selected')
        tabSkills.classList.add('tab')
    } else if(tabAbout.classList.contains('tab-selected')){
        tabAbout.classList.remove('tab-selected');
        tabAbout.classList.add('tab')
    } else if(tabContact.classList.contains('tab-selected')){
        tabContact.classList.remove('tab-selected');
        tabContact.classList.add('tab')
    }
        
    projects.classList.add('active');
    
    if (intro.classList.contains('intro')){
        intro.classList.remove('intro');
        intro.classList.add('intro-inactive')
    } else if(about.classList.contains('active')){
        about.classList.remove('active');
    } else if(skills.classList.contains('active')){
        skills.classList.remove('active');
    } else if(contact.classList.contains('active')){
        contact.classList.remove('active');
    }
});

tabContact.addEventListener('click', function(){
    tabContact.classList.add('tab-selected')
    if((tabHome.classList.contains('tab-selected'))) {
        intro.classList.add('intro-out');
        tabHome.classList.remove('tab-selected');
        tabHome.classList.add('tab')
    } else if(tabSkills.classList.contains('tab-selected')) {
        tabSkills.classList.remove('tab-selected')
        tabSkills.classList.add('tab')
    } else if(tabAbout.classList.contains('tab-selected')){
        tabAbout.classList.remove('tab-selected');
        tabAbout.classList.add('tab')
    } else if(tabProject.classList.contains('tab-selected')){
        tabProject.classList.remove('tab-selected');
        tabProject.classList.add('tab')
    }     

    contact.classList.add('active');
    
    if (intro.classList.contains('intro')){
        intro.classList.remove('intro');
        intro.classList.add('intro-inactive')
    } else if(about.classList.contains('active')){
        about.classList.remove('active');
    } else if(skills.classList.contains('active')){
        skills.classList.remove('active');
    } else if(projects.classList.contains('active')){
        projects.classList.remove('active');
    }
});

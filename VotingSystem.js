//NO PHP ACTION YET

//EMPLOYEE FORMS
function queryForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class=idQuery>
        <form>
            <label> EMPLOYEE QUERYING SYSTEM </label>
            <input type="text" placeholder="Query By ID: ">
            <input type="text" placeholder="First Name...">
            <input type="text" placeholder="Middle Name...">
            <input type="text" placeholder="Last Name...">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}


function createForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="createNew">
        <form>
            <label> INSERT A NEW EMPLOYEE </label>
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Middle Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Address: ">
            <input type="text" placeholder="Phone Number: ">
            <input type="text" placeholder="Email: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Assign to Department: ID">
            <input type="text" placeholder="Start of Employment: ">
            <input type="text" placeholder="Rate per Hour: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function modifyForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="modifyEmployee">
        <form>
            <label> MODIFY EMPLOYEE RECORDS </label>
            <input type="text" placeholder="EMPLOYEE ID: ">
            <input type="text" placeholder="First Name: ">
            <input type="text" placeholder="Middle Name: ">
            <input type="text" placeholder="Last Name: ">
            <input type="text" placeholder="Address: ">
            <input type="text" placeholder="Phone Number: ">
            <input type="text" placeholder="Email: ">
            <input type="text" placeholder="Position: ">
            <input type="text" placeholder="Assign to Project: ID">
            <input type="text" placeholder="Start of Employment: ">
            <input type="text" placeholder="Rate per Hour: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function terminateForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="terminateEmployee">
        <form>
            <label> TERMINATE EXISTING EMPLOYEE </label>
            <input type="text" placeholder="EMPLOYEE ID:">
            <input type="submit" id="buttonCursor" class="terminateSize-submit">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

//WRITE THE ONCLICKS HERE FOR THE MUTATED FORMS


















































































//---------------------------------------------------------------------//

//mutateToEmployees

function mutateToVoters(){
    const sideBar = document.querySelector('.external-sidebar');

    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> VOTERS <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="queryForm()"> Query </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="createForm()"> Register </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="modifyForm()"> Modify </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="terminateForm()"> Purge </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}























//mutateToDepartments

function mutateToCandidates(){
    const sideBar = document.querySelector('.external-sidebar');
    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> CANDIDATES <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="exploreForm()"> View </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="buildForm()"> Confirm </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="reworkForm()"> Update </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="dissolveForm()"> Terminate </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}



// DEPARTMENT FORMS

function exploreForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="exploreDepartment">
        <form>
            <label> EXPLORE DEPARTMENTS </label>
            <input type="text" placeholder="Department ID: ">
            <input type="text" placeholder="Department Name: ">
            <input type="text" placeholder="Department Head: ">
            <input type="text" placeholder="Department Floor: ">
            <input type="text" placeholder="Department Type: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function buildForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="buildDepartment">
        <form>
            <label> ESTABLISH DEPARTMENT </label>
            <input type="text" placeholder="Department Name: ">
            <input type="text" placeholder="Department Head: ">
            <input type="text" placeholder="Department Floor: ">
            <input type="text" placeholder="Department Type: ">
            <input type="text" placeholder="Department Goals: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function reworkForm(){
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="reworkDepartment">
        <form>
            <label> REVISE A DEPARTMENT </label>
            <input type="text" placeholder="Department ID">
            <input type="text" placeholder="Department Name: ">
            <input type="text" placeholder="Department Head: ">
            <input type="text" placeholder="Department Floor: ">
            <input type="text" placeholder="Department Type: ">
            <input type="text" placeholder="Department Goals: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;

}

function dissolveForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="dissolveDepartment">
        <form>
            <label> DISSOLVE EXISTING DEPARTMENT </label>
            <input type="text" placeholder="DEPARTMENT ID:">
            <input type="submit" id="buttonCursor" class="terminateSize-submit">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}



































































function mutateToNominees(){
    const sideBar = document.querySelector('.external-sidebar');
    sideBar.innerHTML = `
        <div class="external-sidebar-projname">
            <h2> NOMINEES <h2>
        </div>

        <div class="external-sidebar-button">
            <button onclick="showForm()"> View </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="createProjectForm()"> Add </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="reviseForm()"> Update </button>
        </div>

        <div class="external-sidebar-button">
            <button onclick="abandonForm()"> Abandon </button>
        </div>
    `;

    const welcome = document.querySelector('.formShifter');

    welcome.innerHTML = `
        Welcome Administrator!
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function showForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="showProject">
        <form>
            <label> QUERY A PROJECT </label>
            <input type="text" placeholder="Project ID: ">
            <input type="text" placeholder="Project Name: ">
            <input type="text" placeholder="Project Head: ">
            <input type="text" placeholder="Project Status: ">
            <input type="text" placeholder="Project Priority: ">
            <input type="text" placeholder="Project Department: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function createProjectForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="createProject">
        <form>
            <label> CREATE A PROJECT </label>
            <input type="text" placeholder="Project Name: ">
            <input type="text" placeholder="Project Head: ">
            <input type="text" placeholder="Project Status: ">
            <input type="text" placeholder="Project Priority: ">
            <input type="text" placeholder="Project Department: ">
            <input type="text" placeholder="Project Description: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function reviseForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="reviseProject">
        <form>
            <label> REVISE A PROJECT </label>
            <input type="text" placeholder="PROJECT ID: ">
            <input type="text" placeholder="Project Name: ">
            <input type="text" placeholder="Project Head: ">
            <input type="text" placeholder="Project Status: ">
            <input type="text" placeholder="Project Priority: ">
            <input type="text" placeholder="Project Department: ">
            <input type="text" placeholder="Project Description: ">
            <input type="submit" id="buttonCursor">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}

function abandonForm() {
    const div = document.querySelector('.formShifter');
    div.innerHTML = `
    <div class="abandonProject">
        <form>
            <label> ABANDON EXISTING PROJECT </label>
            <input type="text" placeholder="PROJECT ID:">
            <input type="submit" id="buttonCursor" class="terminateSize-submit">
        </form>
    </div>
    `;

    const results = document.querySelector('.inner-grid-two');
    results.innerHTML = `
        BACKEND RESULTS HERE
    `;
}






window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

//UC4
//template literal ES6
const createInnerHtml = () => {
    const headerHtml = "  <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";

    const innerHtml = `${headerHtml}
        <tr>
             <td>
                 <img class="profile" src="/assets/profilepics/pp1.png" alt="">
            </td>
            <td>Krati</td>
            <td>Female</td>
            <td>
                <div class="dept-label">Sales</div>
                <div class="dept-label">Engineer</div>
            </td>
            <td>9000000</td>
            <td>3 jan 2021</td>
            <td>
                <img id="1" onclick="remove(this)" src="/assets/images/delete-black-18dp.svg" alt="delete">
                <img id="1" onclick="update(this)" src="/assets/images/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
     `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
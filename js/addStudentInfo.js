/**
 * Created by lovegood on 17-7-18.
 */
function testblank(id) {
    if ($(id).val() == '') {
        return false;
    }
    else {
        return true;
    }
}

function testnumber(id) {
    let s = $(id).val();
    var n = Number(s);
    if (!isNaN(n)) {
        return true;
    }
    else {
        return false;
    }
}

function addStudentInfo(studentInfo, studentInfoList) {
    for (let studInfo of studentInfoList) {
        if (studentInfo.studentID == studInfo.studentID)
            return false;
    }
    studentInfoList.push(studentInfo);
    localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
    return true;
}

function addTotal(studentInfo) {
    studentInfo.total = studentInfo.math + studentInfo.chinese + studentInfo.english + studentInfo.programming;
}

function getAverage(studentInfo) {
    studentInfo.average = studentInfo.total / 4;
}
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

function addTotal(studentInfo) {
    studentInfo.total = studentInfo.math + studentInfo.chinese + studentInfo.english + studentInfo.programming;
}

function getAverage() {
    this.average = this.total / 4;
}
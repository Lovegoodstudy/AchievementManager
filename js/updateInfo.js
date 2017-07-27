function deleteInfoByID(ID) {
    var studentInfoList = JSON.parse(localStorage.getItem('studentInfoList'));
    for (let key in studentInfoList) {
        if (ID == studentInfoList[key].studentID) {
            studentInfoList.splice(key,1);
            localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
            return true;
        }
    }
}

function getAndAddInfo() {
    var serializeObj = {};
    var array = $('form').serializeArray();
    $(array).each(function() {
        if(serializeObj[this.name]) {
            if($.isArray(serializeObj[this.name])) {
                serializeObj[this.name].push(this.value);
            }
            else {
                serializeObj[this.name] = [serializeObj[this.name],this.value];
            }
        }
        else {
            serializeObj[this.name] = this.value;
        }
    });
    infoIn(serializeObj);
    var studentInfoList = JSON.parse(localStorage.getItem('studentInfoList'));
    if ((studentInfoList == undefined)||(!Object.prototype.toString.call(studentInfoList)=='[object Array]')) {
        studentInfoList = [];
        localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
    }
    for (let studentInfo of studentInfoList) {
        if (serializeObj.studentID == studentInfo.studentID) {
            alert('学号已经存在！请重新输入！');
            return false;
        }
    }
    studentInfoList.push(serializeObj);
    localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
}

function popInfoByID(ID) {
    var studentInfoList = JSON.parse(localStorage.getItem('studentInfoList'));
    for (let key in studentInfoList) {
        if (ID == studentInfoList[key].studentID) {
            localStorage.setItem('studentInfoTemp', JSON.stringify(studentInfoList[key]));
            studentInfoList.splice(key,1);
            localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
            return true;
        }
    }
}

function cancelPop() {
    var studentInfoList = JSON.parse(localStorage.getItem('studentInfoList'));
    var studentInfo = JSON.parse(localStorage.getItem('studentInfoTemp'));
    studentInfoList.push(studentInfo);
    localStorage.setItem('studentInfoList', JSON.stringify(studentInfoList));
    localStorage.removeItem('studentInfoTemp');
}
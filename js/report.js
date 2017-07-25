class Report {
    constructor(form) {
        this.form = form;
        this.getAverage();
        this.getMedian();
    }
    getAverage() {
        let total = 0;
        for (let studentInfo of this.form) {
            total += studentInfo.total;
        }
        this.average = total / this.form.length;
    }
    getMedian() {
        if (this.form.length == 0) return;
        for (let i = 0; i < this.form.length; i++)
            for (let j = i + 1; j < this.form.length; j++)
                if (this.form[i].total < this.form[j].total) {
                    let tmp = this.form[i];
                    this.form[i] = this.form[j];
                    this.form[j] = tmp;
                }
        if (this.form.length % 2 == 0) {
            this.median = (this.form[Math.floor(this.form.length / 2) -1].total + this.form[Math.floor(this.form.length / 2)].total) / 2;
        }
        else {
            this.median = this.form[Math.floor(this.form.length / 2)].total;
        }
    }
}
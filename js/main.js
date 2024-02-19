export class JournalEntries {
    constructor() {
        this.entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    }

    add(entry) {
        console.log('add is being called');
        this.entries = [entry, ...this.entries];
        this.update();
        this.save();
    }

    update() {
        console.log('update is being called');
        this.renderEntries();
    }

    save() {
        localStorage.setItem('journalEntries', JSON.stringify(this.entries));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JournalEntries();
});

export class JournalEntries {
    constructor() {
        this.entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        this.bindForm();
        this.renderEntries();
    }

    bindForm() {
        document.getElementById('addEntry').addEventListener('click', () => {
            const locationName = document.getElementById('locationName').value;
            const journalNotes = document.getElementById('journalNotes').value;
            if (!locationName || !journalNotes) {
                alert('Please fill in all fields.');
                return;
            }
            this.add({ locationName, journalNotes });
            document.getElementById('journalForm').reset(); 
        });
    }

    add(entry) {
        this.entries = [entry, ...this.entries];
        this.update();
        this.save();
    }

    save() {
        localStorage.setItem('journalEntries', JSON.stringify(this.entries));
    }

    update() {
        this.renderEntries();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new JournalEntries();
});

export class JournalEntries {
    constructor() {
        this.entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
        this.bindForm();
        this.renderEntries();
    }

    renderEntries() {
        console.log('renderEntries is being called');
        const entriesContainer = document.getElementById('entriesContainer');
        entriesContainer.innerHTML = '';
        this.entries.forEach(entry => {
            const entryElement = document.createElement('div');
            entryElement.textContent = `Location: ${entry.locationName}, Notes: ${entry.journalNotes}`;
            entriesContainer.appendChild(entryElement);
        });
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

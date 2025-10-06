document.addEventListener('DOMContentLoaded', () => {
    const jobList = document.getElementById('job-list');
    const search = document.getElementById('search');

    // Sample job data (realistic examples)
    const jobs = [
        { title: 'Software Developer', location: 'Dar es Salaam', type: 'Full-time' },
        { title: 'Marketing Officer', location: 'Arusha', type: 'Part-time' },
        { title: 'Project Coordinator', location: 'Dodoma', type: 'Contract' },
        { title: 'Finance Analyst', location: 'Mwanza', type: 'Full-time' },
        { title: 'HR Specialist', location: 'Dar es Salaam', type: 'Full-time' }
    ];

    // Display jobs
    const displayJobs = (filter = '') => {
        if (!jobList) return;
        jobList.innerHTML = '';
        const filtered = jobs.filter(job =>
            job.title.toLowerCase().includes(filter.toLowerCase())
        );
        filtered.forEach(job => {
            const card = document.createElement('div');
            card.className = 'job-card';
            card.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
      `;
            jobList.appendChild(card);
        });
        if (filtered.length === 0) {
            jobList.innerHTML = '<p>No jobs found matching your search.</p>';
        }
    };

    displayJobs();
    if (search) {
        search.addEventListener('input', e => displayJobs(e.target.value));
    }

    // Form submission
    const form = document.getElementById('applicationForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Application submitted successfully!');
            form.reset();
        });
    }
});

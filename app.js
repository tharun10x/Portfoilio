
fetch('version.json')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        const versionDisplay = document.getElementById('version-number');
        versionDisplay.textContent = `v${data.version}`;
      }, 2000); // 2000ms = 2 seconds delay
    })
    .catch(error => {
      console.error('Error loading version info:', error);
    });

particlesJS('particles-js', particleConfig);
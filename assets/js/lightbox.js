const icons = [
    'python.png',
    'ssm.png',
    'powerbi.png',
    'mysql.png',
    'looker.png',
    'tableau.png',
    'excel.png',
    'app-script.png',
    'sheets.png',
    'donut.png',
    'azure.png',
    's3.png',
    'ec2.png',
    'git.png',
    'factory.png',
    'bigquery.png',
    'powerautomate.png',
    'spark.png'
    // Add more icon paths as needed
];

const iconLimit = 50; // Maximum number of icons in the viewport
const iconDelay = 400; // Adjust the delay between each icon appearance (in milliseconds)
let iconCount = 0;
const iconDistance = 500; // Adjust the distance between icons
let lastTwoIndices = [-1]; // Initialize with indices that don't exist

function getRandomIconIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * icons.length);
    } while (lastTwoIndices.includes(randomIndex));
    lastTwoIndices.shift();
    lastTwoIndices.push(randomIndex);
    return randomIndex;
}

function getRandomIconSize() {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10; // Random size between 30 and 80
}

function getRandomAnimationDuration() {
    return Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Random duration between 10 and 30 seconds
}


function createIcon() {
    if (iconCount < iconLimit) {
        const randomIconIndex = getRandomIconIndex();
        const iconPath = icons[randomIconIndex];
        const iconSize = getRandomIconSize(); // Get random size for the icon
        const icon = document.createElement("div");
        icon.classList.add("icons");
        icon.style.backgroundImage = `url('/assets/icons/${iconPath}')`;
        icon.style.width = iconSize + "px"; // Set random width
        icon.style.height = iconSize + "px"; // Set random height
        const animationDuration = getRandomAnimationDuration(); // Get random animation duration
        icon.style.animationDuration = `${animationDuration}s`; // Set random animation duration

        // Set icon position randomly within the viewport
        icon.style.right = Math.random() * (window.innerWidth - iconSize) + "px"; // Random X position
        icon.style.top = (window.scrollY + window.innerHeight) + "px";

        // Insert icon as the first child of the body
        document.body.insertBefore(icon, document.body.firstChild);

        // Increment icon count
        iconCount++;

        // Check if the icon moves out of the viewport and remove it
        setInterval(() => {
            if (icon.getBoundingClientRect().bottom < 0 || icon.getBoundingClientRect().top > window.innerHeight ||
                icon.getBoundingClientRect().right < 0 || icon.getBoundingClientRect().left > window.innerWidth) {
                icon.remove();
                iconCount--;
            }
        }, 10000); // Check every 100 milliseconds
    }
}

// Call the function to create icons at a regular interval
setInterval(createIcon, iconDelay);


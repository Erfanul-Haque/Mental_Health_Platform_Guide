document.addEventListener("DOMContentLoaded", () => {
    const therapists = [
        {
          id: 1,
          name: "Dr. Sami Ahmed",
          specialty: "Anxiety, Depression",
          location: "Dhaka",
          contact: "sami.ahmed@gmail.com",
          phone: "+880123456789",
        },
        {
          id: 2,
          name: "Dr. Sarina Hoq",
          specialty: "Child Therapy, PTSD",
          location: "Khulna",
          contact: "sarina.hoq@gmail.com",
          phone: "+880987654321",
        },
        {
          id: 3,
          name: "Dr. Sarah Lee",
          specialty: "Cognitive Behavioral Therapy",
          location: "Sylhet",
          contact: "sarah.lee@gmail.com",
          phone: "+880112233445",
        },
        {
          id: 4,
          name: "Dr. Mark Taylor",
          specialty: "Stress Management, Couples Therapy",
          location: "Chittagong",
          contact: "mark.taylor@gmail.com",
          phone: "+880998877665",
        },
        {
          id: 5,
          name: "Dr. Amanda Brown",
          specialty: "Mindfulness Therapy",
          location: "Dhaka",
          contact: "amanda.brown@gmail.com",
          phone: "+880445566778",
        },
        {
          id: 6,
          name: "Dr. Rizwan Islam",
          specialty: "Grief Counseling",
          location: "Barisal",
          contact: "rizwan.islam@gmail.com",
          phone: "+880667788990",
        },
        {
          id: 7,
          name: "Dr. Tasnim Akhter",
          specialty: "Family Therapy",
          location: "Rajshahi",
          contact: "tasnim.akhter@gmail.com",
          phone: "+880776655443",
        },
        {
          id: 8,
          name: "Dr. Nusrat Jahan",
          specialty: "Trauma Therapy",
          location: "Cox's Bazar",
          contact: "nusrat.jahan@gmail.com",
          phone: "+880998822114",
        },
      ];
      
  
    const therapistList = document.getElementById("therapist-list");
    const searchInput = document.getElementById("search-input");
    const filterLocation = document.getElementById("filter-location");
    const searchButton = document.getElementById("search-button");
  
    // Function to display therapists
    const displayTherapists = (filteredTherapists) => {
        therapistList.innerHTML = ""; // Clear the list
        filteredTherapists.forEach((therapist) => {
          const card = document.createElement("div");
          card.classList.add("therapist-card");
          card.innerHTML = `
            <h3>${therapist.name}</h3>
            <p><strong>Specialty:</strong> ${therapist.specialty}</p>
            <p><strong>Location:</strong> ${therapist.location}</p>
            <p><strong>Contact:</strong> <a href="mailto:${therapist.contact}">${therapist.contact}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${therapist.phone}">${therapist.phone}</a></p>
          `;
          therapistList.appendChild(card);
        });
      };
      
      
  
    // Initial display of all therapists
    displayTherapists(therapists);
  
    // Search and filter functionality
    searchButton.addEventListener("click", () => {
      const searchText = searchInput.value.toLowerCase();
      const locationFilter = filterLocation.value;
  
      const filteredTherapists = therapists.filter((therapist) => {
        const matchesSearch =
          therapist.name.toLowerCase().includes(searchText) ||
          therapist.specialty.toLowerCase().includes(searchText);
        const matchesLocation =
          locationFilter === "all" || therapist.location === locationFilter;
  
        return matchesSearch && matchesLocation;
      });
  
      displayTherapists(filteredTherapists);
    });
  });
  
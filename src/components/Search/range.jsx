const mockData = [
    {
      name: "John Doe",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "New York, USA",
      latitude: 40.7128,
      longitude: -74.0060,
      availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
      rating: "4.8",
      reviews: "10000",
      price: "₹1500/Hour",
      postedDate: "12-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Jane Smith",
      profession: "Mason",
      experience: "5",
      skills: "5",
      location: "Los Angeles, USA",
      latitude: 34.0522,
      longitude: -118.2437,
      availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
      rating: "4.5",
      reviews: "8500",
      price: "₹1400/Hour",
      postedDate: "15-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Mike Johnson",
      profession: "Bricklayer",
      experience: "5",
      skills: "5",
      location: "Chicago, USA",
      latitude: 41.8781,
      longitude: -87.6298,
      availableDays: ["Tuesday", "Wednesday", "Friday", "Saturday"],
      rating: "4.7",
      reviews: "9500",
      price: "₹1600/Hour",
      postedDate: "18-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Emily Davis",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "New York, USA",
      latitude: 40.7128,
      longitude: -74.0060,
      availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
      rating: "4.9",
      reviews: "12000",
      price: "₹1700/Hour",
      postedDate: "10-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Davis",
      profession: "Electrician",
      experience: "5",
      skills: "5",
      location: "Nanded, India",
      latitude: 19.1522,
      longitude: 77.2997,
      availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
      rating: "4.6",
      reviews: "9000",
      price: "₹1450/Hour",
      postedDate: "20-11-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Kathir",
      profession: "Carpenter",
      experience: "5",
      skills: "5",
      location: "Coimbatore, India",
      latitude: 11.0168,
      longitude: 76.9558,
      availableDays: ["Sunday", "Wednesday", "Friday", "Saturday"],
      rating: "4.8",
      reviews: "10000",
      price: "₹1500/Hour",
      postedDate: "12-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
    {
      name: "Alex Green",
      profession: "Plumber",
      experience: "5",
      skills: "5",
      location: "Houston, USA",
      latitude: 29.7604,
      longitude: -95.3698,
      availableDays: ["Monday", "Tuesday", "Friday", "Sunday"],
      rating: "4.7",
      reviews: "8800",
      price: "₹1350/Hour",
      postedDate: "05-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: true,
    },
    {
      name: "Sophia Brown",
      profession: "Painter",
      experience: "5",
      skills: "5",
      location: "Los Angeles, USA",
      latitude: 34.0522,
      longitude: -118.2437,
      availableDays: ["Monday", "Thursday", "Friday", "Saturday"],
      rating: "4.6",
      reviews: "9500",
      price: "₹1300/Hour",
      postedDate: "08-12-2023",
      profilePicture:
        "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
      isVerified: false,
    },
  ];
  
  
  // Function to calculate distance between two points using Haversine formula
  function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371; // Earth's radius in kilometers
  
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLon = (lon2 - lon1) * Math.PI / 180;
      
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);
      
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c; // Distance in km
      
      return distance;
  }
  
  // Function to check if a service provider is within radius
  function isWithinServiceArea(
      providerLat, 
      providerLong, 
      customerLat, 
      customerLong, 
      maxRadius
  ) {
      const distance = calculateDistance(
          providerLat, 
          providerLong, 
          customerLat, 
          customerLong
      );
      console.log(`Provider is at distance: ${distance} km`); 
      return distance <= maxRadius;
  }
  
  // Example usage: Filter available service providers
  function getAvailableProviders(customerLocation, serviceProviders, maxRadius) {
      return serviceProviders.filter(provider => {
          const isAvailable = isWithinServiceArea(
              provider.latitude,
              provider.longitude,
              customerLocation.latitude,
              customerLocation.longitude,
              maxRadius
          );
          console.log(`Provider ${provider.name} available: ${isAvailable}`);  // Debugging line
          return isAvailable;
      });
  }
  
  const customerLocation = {
      latitude: 40.7128,
      longitude: -74.0060
  };
  
  // Get providers available for this customer
  const availableProviders = getAvailableProviders(
      customerLocation,
      mockData,
      10 // 100 km radius
  );
  
  console.log(availableProviders);  // Final result
  
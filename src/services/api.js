
export async function fetchUser(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

export async function getRepos(reposUrl) {
    try {
      const response = await fetch(reposUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch user repositories');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user repositories:', error);
      throw error;
    }
  }
  
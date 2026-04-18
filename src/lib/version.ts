import latestVersion from 'latest-version';

export async function getLatestCLIVersion() {
  try {
    // Attempt to get the latest version from npm
    return await latestVersion('get-response');
  } catch (error) {
    console.error('Failed to fetch latest version from npm:', error);
    // Fallback if registry is down or package not found
    return '1.10.x';
  }
}

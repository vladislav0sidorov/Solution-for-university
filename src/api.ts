export async function fetchBio(person: string): Promise<string> {
    const delay = person === 'Bob' ? 3000 : 300;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('This is ' + person + '’s bio.');
      }, delay);
    })
  }

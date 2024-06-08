/*
Minimum Number of Platforms Required for a Railway/Bus Station

Given the arrival and departure times of all trains that reach a railway station, 
the task is to find the minimum number of platforms required for the railway station 
so that no train waits. We are given two arrays that represent the arrival and 
departure times of trains that stop.

*/

findPlatform(arr, dep, n);
{
  //your code here
  let a = [];

  for (let i = 0; i < n; i++) {
    a.push({ arr: arr[i], dep: dep[i] });
  }

  a.sort((c, d) => c.arr - d.arr);

  let p = [],
    count = 1;
  p.push(a[0].dep);

  for (let i = 1; i < n; i++) {
    if (a[i].arr > p[0]) {
      p.shift();
    } else {
      count++;
    }

    p.push(a[i].dep);
    p.sort((c, d) => c - d);
  }

  return count;
}

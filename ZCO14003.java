/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;


class Codechef
{
	static	void insert(int[] arr, int x, int size) {
		arr[size] = x;
		double hi = (size - 1) / 2;
		int temp = (int) Math.floor(hi);
		while (size > 0 && arr[size] <= arr[temp])// changed
		{
			int temp2 = arr[temp];
			arr[temp] = arr[size];
			arr[size] = temp2;
			size = temp;
			hi = (size - 1) / 2;
			temp = (int) Math.floor(hi);
		}
	}

static	void delete(int[] arr, int size) {
		int temp3 = arr[0];
		arr[0] = arr[size - 1];
		arr[size - 1] = temp3;
		int cur = 0;
		int temp = 0;
		if (((2 * cur) + 1) >= size - 1) {
			return;
		} else if (((2 * cur) + 2) >= size - 1) {
			temp = 2 * cur + 1;
		} else {
			if (arr[(2 * cur) + 2] > arr[(2 * cur + 1)]) {
				temp = (2 * cur) + 1;
			} else {
				temp = (2 * cur) + 2;
			}
		}
		while (cur <= (size - 1) && arr[cur] > arr[temp]) {
			int temp2 = arr[cur];
			arr[cur] = arr[temp];
			arr[temp] = temp2;
			cur = temp;
			if (((2 * cur) + 1) >= size - 1) {
				break;
			} else if (((2 * cur) + 2) >= size - 1) {
				temp = 2 * cur + 1;
			} else {
				if (arr[(2 * cur) + 2] > arr[(2 * cur + 1)]) {
					temp = (2 * cur) + 1;
				} else {
					temp = (2 * cur) + 2;
				}
			}
		}
	}
	public static void main (String[] args) throws java.lang.Exception
	{
			Scanner in=new Scanner(System.in);
		int n=in.nextInt();
		int size=0;
		int[]arr=new int[n];
		for(int i=0;i<n;i++)
		{
			int x=in.nextInt();
			//Solution obj=new Solution();
			insert(arr,x,size);
			size++;
		}
		long ans=0;
		for(int i=0;i<n;i++)
		{
			long temp=(long)arr[0]*(long)size;
			if(temp>ans){
				ans=temp;
			}
		//	Solution obj2=new Solution();
			delete(arr,size);
			size--;
		}
		System.out.println(ans);
	}
}
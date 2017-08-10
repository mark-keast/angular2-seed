import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class UsersResolve implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot) {
          // ideally this would be http call to a service to get all RiderData.
          let data = [{
                firstname:'dave',
                lastname:'jones',
                email :'dave@davecom',
                id: '582dghu858454095bc0fa72d013f3f74'
            },{
                firstname:'mark',
                lastname:'jones',
                email :'mark@davecom',
                id: 'dg48882658454095bc0fa72d013f3f74'
            },{
                firstname:'steven',
                lastname:'jones',
                email :'steven@davecom',
                id: 'e9e3882659904095bc0fa72d013f3f74'
            }];
          return data;

  }
}

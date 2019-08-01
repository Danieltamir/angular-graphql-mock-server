import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs/index';
import {getAllUsers, getUserById} from '../graphql/queries';
import {addUser} from '../graphql/mutations';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private apollo: Apollo) {}

  /**Below you will find the characters queries**/
  /**==========================================**/

  getAllUsers(): Observable<any> {
    return this.apollo.query({
      query: getAllUsers
    });
  }

  getCharacterById(characterId): Observable<any> {
    return this.apollo.query({
      query: getUserById,
      variables: {characterId: characterId}
    });
  }

  /**Below you will find the characters mutations**/
  /**==========================================**/

  addNewUser(user: any) {
    return this.apollo.mutate({
      mutation: addUser,
      variables: {
        character: user
      }
    });
  }
}

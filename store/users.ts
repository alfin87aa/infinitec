import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  users: User[] = []

  @Mutation
  setUsers(users: User[]) {
    this.users = users
  }

  @Action
  async getUsers(user: User[]) {
    const users = user;
    this.setUsers(users)
  }
  async removeUsers(id: string) {

  }
}

export class User {
  id: string;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  Users: User[];

  constructor() {
    this.id = '';
    this.avatar = '';
    this.email = '';
    this.first_name = '';
    this.last_name = '';
    this.Users = [];
  }
}

import { useContext, reactive, toRefs, isRaw } from '@nuxtjs/composition-api'

export default function useAxios<T>(endpoint: string) {
    const { $axios } = useContext()
    let myUser = new User;
    const state = reactive({
        value: myUser.users,
        loading: true,
        errored: false,
        get: async (page: number) => {
            $axios
                .get(`${endpoint}${page > 0 ? '?page=' + page : ''}`)
                .then(response => {
                    state.value = response.data;
                })
                .catch(error => {
                    console.log(error);
                    state.errored = true;
                })
                .finally(() => (state.loading = false));
        },
        post: async (payload: object) => {
            $axios
                .post(endpoint, payload)
                .then(response => {
                    state.value = response.data;
                })
                .catch(error => {
                    console.log(error);
                    state.errored = true;
                })
                .finally(() => (state.loading = false));
        },
        put: async (id: string, payload: object) => {
            $axios
                .put(`${endpoint}/${id}`, payload)
                .then(response => {
                    state.value = response.data;
                })
                .catch(error => {
                    console.log(error);
                    state.errored = true;
                })
                .finally(() => (state.loading = false));
        },
        del: async (id: string) => {
            $axios
                .delete(`${endpoint}/${id}`)
                .then(response => {
                     
                })
                .catch(error => {
                    console.log(error);
                    state.errored = true;
                })
                .finally(() => (state.loading = false));
        }
    });

    return toRefs(state);
};

class User {
    id: string;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    users: User[];

    constructor() {
        this.id = '';
        this.avatar = '';
        this.email = '';
        this.first_name = '';
        this.last_name = '';
        this.users = [];
    }
}

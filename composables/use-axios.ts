import { useContext, reactive, toRefs } from '@nuxtjs/composition-api'

export default function useAxios(endpoint: string) {
    const { $axios } = useContext()
    const state = reactive({
        value: null,
        loading: true,
        errored: false,
        get: fetchData(),
        //post: createData(),
    });

    function fetchData() {
        $axios
            .get(endpoint)
            .then(response => {
                state.value = response.data;
            })
            .catch(error => {
                console.log(error);
                state.errored = true;
            })
            .finally(() => (state.loading = false));
    }
    const createData = async (payload: object) => {
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
    }
    function updateData(id: string, payload: object) {
        $axios
            .put(`${endpoint}/ + ${id}`, payload)
            .then(response => {
                state.value = response.data;
            })
            .catch(error => {
                console.log(error);
                state.errored = true;
            })
            .finally(() => (state.loading = false));
    }
    function deleteData(id: string) {
        $axios
            .delete(`${endpoint}/ + ${id}`)
            .then(response => {
                state.value = response.data;
            })
            .catch(error => {
                console.log(error);
                state.errored = true;
            })
            .finally(() => (state.loading = false));
    }
    return toRefs(state);
};

import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "useMainStore",
    state: () => ({
        helpdesk: <Helpdesk[]>[],
        isLoading: true,
        test: 'Venom!!!',
    }),
    actions: {
        async getHelpdesk(params) {
            const response = await api.helpdesk.indexHelpdesk(params);
            return response;
        },
        setHelpDesk(val) {
            this.$patch({
                helpdesk: [...val],
            });
        },
    },
});
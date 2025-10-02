type SetStateFunction = (state: boolean) => void;

class ActiveItemsManager {
    private static instance: ActiveItemsManager;
    private itemsMap: Map<number, SetStateFunction>;

    private constructor() {
        this.itemsMap = new Map();
    }

    static getInstance() {
        if (!ActiveItemsManager.instance) {
            ActiveItemsManager.instance = new ActiveItemsManager();
        }
        return ActiveItemsManager.instance;
    }

    setItem(id: number, setState: SetStateFunction) {
        this.itemsMap.set(id, setState);
    }

    deactivateOthers(currentId: number) {
        this.itemsMap.forEach((setState, itemId) => {
            if (itemId !== currentId) {
                setState(false);
            }
        });
    }
}

export const activeItemsManager = ActiveItemsManager.getInstance();

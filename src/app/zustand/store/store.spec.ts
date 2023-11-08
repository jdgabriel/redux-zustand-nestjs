import { PlayerState } from "@/@types/player-state";
import { usePlayerStore } from ".";

const INITIAL_STATE_EXAMPLE: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          { id: "w-DW4DhDfcw", title: "Estilização do Post", duration: "10:05" },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          { id: "gE48FQXRZ_o", title: "Componente: Comment", duration: "13:45" },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleOpenedIndex: 0,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("Player Slice", () => {
  it("should be able to play", () => {
    usePlayerStore.setState(INITIAL_STATE_EXAMPLE);
    usePlayerStore.getState().play([1, 2]);
    const state = usePlayerStore.getState();
    expect(state.currentModuleOpenedIndex).toEqual(1);
    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should be able to play next video automatically", () => {
    usePlayerStore.setState(INITIAL_STATE_EXAMPLE);
    usePlayerStore.getState().next();
    const state = usePlayerStore.getState();
    expect(state.currentModuleOpenedIndex).toEqual(0);
    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    usePlayerStore.setState({
      ...INITIAL_STATE_EXAMPLE,
      currentLessonIndex: 1,
    });
    usePlayerStore.getState().next();
    const state = usePlayerStore.getState();
    expect(state.currentModuleOpenedIndex).toEqual(1);
    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });

  it("should not update theme current module and lesson index if there is no next lesson available", () => {
    usePlayerStore.setState({
      ...INITIAL_STATE_EXAMPLE,
      currentLessonIndex: 1,
      currentModuleIndex: 1,
    });
    usePlayerStore.getState().next();
    const state = usePlayerStore.getState();
    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });
});

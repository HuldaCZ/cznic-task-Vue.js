import { mount, createLocalVue } from "@vue/test-utils";
import EventsCard from "@/components/Cards/EventsCard.vue";
import Vuetify from "vuetify";

describe("EventsCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Check if props are proprly passed to component", async () => {
    const wrapper = mount(EventsCard, {
      localVue,
      vuetify,
      propsData: {
        events: {
          registered: {
            timestamp: "2002-01-14T14:56:00Z",
            registrar_handle: "REG-CZNIC",
          },
          transferred: {
            timestamp: "2010-06-10T10:49:20.614Z",
            registrar_handle: "REG-GENREG",
          },
          updated: {
            timestamp: "2016-12-27T14:12:25.714Z",
            registrar_handle: "REG-GENREG",
          },
          unregistered: null,
        },
      },
    });

    const registeredTime = wrapper.get('[data-testid="registered-time"]');
    expect(registeredTime.text()).toContain(new Date("2002-01-14T14:56:00Z").toLocaleString());

    const registeredHandle = wrapper.get('[data-testid="registered-handle"]');
    expect(registeredHandle.text()).toContain("REG-CZNIC");
  });
});

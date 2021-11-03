import { mount, createLocalVue } from "@vue/test-utils";
import DnsCard from "@/components/Cards/DnsCard.vue";
import Vuetify from "vuetify";

describe("DnsCard.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Check if props are proprly passed to component (nsset) ", async () => {
    const wrapper = mount(DnsCard, {
      localVue,
      vuetify,
      propsData: {
        title: "Title",
        dnsData: {
          handle: "ZEMEPLOCHA-NSSET",
          registrar: "REG-CZNIC",
          dns: [
            {
              name: "string11",
              ip_address: "string12",
            },
            {
              name: "string21",
              ip_address: "string22",
            },
          ],
        },
      },
    });

    expect(wrapper.get('[data-testid="dns-card-title"]').text()).toContain("Title");
    expect(wrapper.get('[data-testid="dns-card-handle"]').text()).toContain("ZEMEPLOCHA-NSSET");
    expect(wrapper.get('[data-testid="dns-card-registrar"]').text()).toContain("REG-CZNIC");
    expect(wrapper.get('[data-testid="dns-card-label"]').text()).toContain("DNS");
    expect(wrapper.get('[data-testid="dns-card-data-1"]').text()).toContain("string11(string12)");
    expect(wrapper.get('[data-testid="dns-card-data-2"]').text()).toContain("string21(string22)");

  });

  it("Check if props are proprly passed to component (keyset) ", async () => {
    const wrapper = mount(DnsCard, {
      localVue,
      vuetify,
      propsData: {
        title: "Title",
        dnsData: {
          handle: "ZEMEPLOCHA-KEYSET",
          registrar: "REG-CZNIC",
          dns_keys: ["key1", "key2"],
        },
      },
    });

    expect(wrapper.get('[data-testid="dns-card-title"]').text()).toContain("Title");
    expect(wrapper.get('[data-testid="dns-card-handle"]').text()).toContain("ZEMEPLOCHA-KEYSET");
    expect(wrapper.get('[data-testid="dns-card-registrar"]').text()).toContain("REG-CZNIC");
    expect(wrapper.get('[data-testid="dns-card-label"]').text()).toContain("DNS keys");
    expect(wrapper.get('[data-testid="dns-card-data-1"]').text()).toContain("key1");
    expect(wrapper.get('[data-testid="dns-card-data-2"]').text()).toContain("key2");
 
  });
});

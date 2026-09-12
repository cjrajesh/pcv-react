const machines = [
  { image: "/img/mc-1.jpg", label: "Fiber Laser Cutting Machine" },
  { image: "/img/mc-2.jpg", label: "Milling Machine" },
  { image: "/img/mc-3.jpg", label: "Rotary Surface Grinding Machine 1250 mm" },
  { image: "/img/mc-4.jpg", label: "Rotary Surface Grinding Machine 1500 mm" },
  { image: "/img/mc-5.jpg", label: "Vertical Machining Centre" },
  { image: "/img/mc-6.jpg", label: "Vertical Turret Lathe" },
];

export default function MachineGrid() {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto max-w-[1170px] px-4">
        <div className="mb-12">
          <h2 className="relative inline-block text-3xl uppercase font-medium pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[55px] after:h-[3px] after:bg-brand">
            Our <span className="text-brand">Machines</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((m, i) => (
            <div key={i} className="border border-[#ededed] p-1">
              <div className="overflow-hidden">
                <img src={m.image} alt={m.label} className="w-full" />
              </div>
              <div className="text-center py-4">
                <a href="#" className="text-lg font-semibold text-[#222] hover:text-brand transition">
                  {m.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
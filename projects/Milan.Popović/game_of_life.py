# Life cellular automaton based on SimpleGUI program template
# by Jon Nixon

# Import the module
import simplegui

# Constants
WIDTH = 486
HEIGHT = 486
SCALE = 9
OX = 0
OY = 0

# Define classes
    
class Colony:
    'class to represent a life colony'
    
    def __init__(self):
        self.cells = {}
        self.generation = 0
        
    def addCell(self, x, y):
        'add cell to colony'
        self.cells[(x,y)] = True
        
    def getCells(self):
        'return list of cell coordinates'
        return self.cells.keys()
    
    def toggle(self, x, y):
        'toggle live/dead status of cell at x, y'
        if (x in self.cells and y in self.cells[x]):
            del self.cells[(x,y)]
        else:
            self.cells[(x,y)] = True
    
    def countNeighbours(self, x, y):
        'count neighbours of cell at x, y'
        count = 0
        for nx in [x - 1, x, x + 1]:
            for ny in [y - 1, y, y + 1]:
                if ((x != nx or y != ny) and (nx,ny) in self.cells):
                    count += 1
                    # Greater than three is always bad
                    if (count > 3):
                        return count
        return count
    
    def getGeneration(self):
        return self.generation
    
    def getCellCount(self):
        return len(self.cells)
    
# Renegerate colony using rules from http://en.wikipedia.org/wiki/Conway's_Game_of_Life#Rules
# Any live cell with two or three live neighbours lives on to the next generation.
# Any live cell with more than three live neighbours dies, as if by overcrowding.
# Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. 
         
    def regenerate(self):
        'regenerate colony using standard life rules'
        newCells = {}
        tested = {}
        # Loop through cells
        for cell in self.cells.keys():
            cx = cell[0]
            cy = cell[1]
            # Loop through cell and neighbours
            for x in (cx - 1, cx, cx + 1):
                for y in (cy - 1, cy, cy + 1):
                    # Only test each cell once
                    if ( not (x,y) in tested ):
                        tested[(x,y)] = True
                        # Count neighbours of cell and neighbours
                        count = self.countNeighbours(x, y)
                        if ( ( count == 3 ) or
                            (( count == 2 ) and (x,y) in self.cells ) ):
                            newCells[(x,y)] = True
        self.cells = newCells
        self.generation += 1
        
# Define global variables (program state)
scale = SCALE
ox = OX
oy = OY
colony = None
gen_label = None
cnt_label = None
timer = None
prev_position = [-1, -1]

# Define "helper" functions

# Clear colony
def clear():
    global colony
    colony = Colony()

# Reset colony to r-pentomino    
def reset():
    global colony, scale
    clear()
    scale = SCALE
    ox = OX
    oy = OY

    # Find center of grid
    x = WIDTH // scale // 2
    y = HEIGHT // scale // 2

    # Add r-pentomino
    colony.addCell(x, y - 1)
    colony.addCell(x + 1, y - 1)
    colony.addCell(x - 1, y)
    colony.addCell(x, y)
    colony.addCell(x, y + 1)

# Define event handler functions

# Handler for timer
def timer_handler():
    global colony
    colony.regenerate()

# Handlers for button clicks

def start_handler():
    timer.start()
    
def stop_handler():
    timer.stop()     
    
def clear_handler():
    timer.stop() 
    clear()    
    
def reset_handler():
    timer.stop() 
    reset()  
    
def zoomin_handler():
    global scale, ox, oy
    if (scale <= WIDTH // 3 and scale <= HEIGHT // 3):
        ox -= ((WIDTH // (scale + 3)) - (WIDTH // scale)) // 2
        oy -= ((HEIGHT // (scale + 3)) - (HEIGHT // scale)) // 2
        scale += 3  
    
def zoomout_handler():
    global scale, ox, oy
    if ( scale >= 6 ):
        scale -= 3  
        ox += ((WIDTH // (scale + 3)) - (WIDTH // scale)) // 2
        oy += ((HEIGHT // (scale + 3)) - (HEIGHT // scale)) // 2

# Translate mouse position to cell and toggle it    
def mouse_handler(position):
    global prev_position
    x = position[0] // scale + ox
    y = position[1] // scale + ox
    if ( x != prev_position[0] or y != prev_position[1] ):
        colony.toggle(x, y)   
        prev_position = [x, y]

# Handler to draw on canvas
def draw(canvas):
    # Draw grid
    for y in range(HEIGHT // scale):
        canvas.draw_line((0, y * scale), (WIDTH, y * scale), 1, "Gray")
    for x in range(WIDTH // scale):
        canvas.draw_line((x * scale, 0), (x * scale, HEIGHT), 1, "Gray")
    # Loop through cells
    for cell in colony.getCells():
        x = cell[0] - ox
        y = cell[1] - oy
        if ( x >= 0 and x * scale < WIDTH and y >=0 and y * scale < HEIGHT):
            canvas.draw_polygon([[x * scale + 1, y * scale + 1],
                             [x * scale + 1, (y + 1) * scale - 1],
                             [(x + 1) * scale - 1, (y + 1) * scale - 1],
                             [(x + 1) * scale - 1, y * scale + 1]
                             ], 1, "White", "White")
    # Update labels
    gen_label.set_text("Generation: "+str(colony.getGeneration()))
    cnt_label.set_text("Cell count: "+str(colony.getCellCount()))
    
# Create a frame
frame = simplegui.create_frame("Conway's Game of Life", WIDTH, HEIGHT)
frame.set_draw_handler(draw)

# Register event handlers
gen_label = frame.add_label("")
cnt_label = frame.add_label("")
frame.add_label("")
frame.add_button("Start", start_handler)
frame.add_button("Stop", stop_handler)
frame.add_button("Zoom In", zoomin_handler)
frame.add_button("Zoom Out", zoomout_handler)
frame.add_button("Reset", reset_handler)
frame.add_button("Clear", clear_handler)
frame.add_label("")
frame.add_label("Click on grid to toggle cell")
frame.set_mousedrag_handler(mouse_handler)

# Initialize
reset()

# Start frame and timers
timer = simplegui.create_timer(100, timer_handler)
frame.start()
